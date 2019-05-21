export class EzValidationInput extends HTMLInputElement {
  constructor() {
    super();

    this._isRequired = false;
    this._regex = null;
  }

  static get observedAttributes() {
    return [
      'value',
      'regex',

    ];
  }

  _checkIsRequiredAndPopulated(value) {
    return (this._isRequired) ? !!value : true;
  }

  _checkIfRegexMatches(value) {
    return (this._regex) ?  value.match(this._regex) !== null : true;
  }

  _updateRequired(value) {
    if (this.hasAttribute('required'))
      this._isRequired = value !== 'false' || this.getAttribute('required') !== 'false';
  }

  _updateRegex(value) {
    if (this.hasAttribute('regex'))
      this._regex = value || this.getAttribute('regex');
  }

  _triggerEvent() {
    this.dispatchEvent(
      (this.hasAttribute('valid'))
        ? new CustomEvent('valid') 
        : new CustomEvent('invalid')
    );
  }

  connectedCallback() {
    this._updateRequired();
    this._updateRegex();

    this.addEventListener('keyup', event => {
      const { value } = event.target;
      const requirementCheck = this._checkIsRequiredAndPopulated(value);
      const regexCheck = this._checkIfRegexMatches(value);
      if (requirementCheck && regexCheck) {
        this.setAttribute('valid', '');
      } else {
        this.removeAttribute('valid');
      }
      this._triggerEvent();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'regex':
          this._updateRegex(newValue);
          break;
        case 'required':
          this._updateRequired(newValue);
          break;
        default:
          console.log('Unknown updated attribute.'); // Shouldn't reach here.
      }
    }
  }
}

customElements.define('ez-validation-input', EzValidationInput, { extends: 'input' });
