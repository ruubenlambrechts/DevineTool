import {observable, action, computed} from 'mobx';

import Uitstap from '../models/Uitstap';

import uitstapAPI from '../lib/api/uitstap';

class Store {

  @observable
  uitstap = ``

  @observable
  content = ``

  @observable
  naam = ``

  @observable
  positive = ``

  @observable
  negative = ``

  @observable
  uitstappen = []

  init = () => {
    uitstapAPI.read()
      .then(d => this._add(...d.uitstaps));
  }

  constructor() {
    this.init();
  }

  @computed
  get chars() {
    if (this.positive.length === 0 || this.negative.length === 0) {
      return false;
    }
  }

  add = (content, naam, uitstap, positive, negative) => {
    uitstapAPI.create(content, naam, uitstap, positive, negative)
      .then(uitstap => {
        this._add(uitstap);
      });
  }

  @action
  _add = (...uitstappen) => {
    uitstappen.forEach(u => {
      this.uitstappen.push(
        new Uitstap(u)
      );

    });
  }

  @action
  setNaam = naam => {
    this.naam = naam;
  }

  @action
  setUitstap = uitstap => {
    this.uitstap = uitstap;
  }

  @action
  setContent = content => {
    this.content = content;
  }

  @action
  setPositive = positive => {
    this.positive = positive;
  }

  @action
  setNegative = negative => {
    this.negative = negative;
  }

  @action
  resetUitstap = () => {
    this.content = ``;
    this.positive = ``;
    this.negative = ``;
    this.naam = ``;
  }

  @action
  remove = _id => {
    uitstapAPI.delete(_id)
      .then(() => this.remove(_id));
  }

  @action
  _remove = id => {
    this.uitstappen.find(t => t.id === id).deconstructor();
    this.uitstappen = this.uitstappen.filter(t => t.id !== id);
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
