export default class Uitstap {

  content = ``
  uitstap = ``
  naam = ``
  _id = ``
  positive = ``
  negative = ``
  isActive = true
  modified = ``
  created = ``

  // @observable
  // timeAgo = ``

  constructor({content, uitstap, naam, positive, negative, isActive, _id, created, modified}) {
    this.content = content;
    this.uitstap = uitstap;
    this.positive = positive;
    this.negative = negative;
    this._id = _id;
    this.naam = naam;
    this.modified = modified;
    this.created = created;
    this.isActive = isActive;
  }

}
