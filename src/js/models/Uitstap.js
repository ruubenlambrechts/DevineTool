import {
  observable,
} from 'mobx';

export default class uitstap {

  content = ``
  datum = ``
  uitstap = ``
  naam = ``
  modified = ``
  created = ``
  id = ``
  isActive = true

  @observable
  timeAgo = ``

  constructor({
    content, datum, uitstap, naam, isActive, modified, created, id
  }) {
    this.content = content;
    this.datum = datum;
    this.uitstap = uitstap;
    this.naam = naam;
    this.modified = modified;
    this.created = created;
    this.id = id;
    this.isActive = isActive;
  }

}
