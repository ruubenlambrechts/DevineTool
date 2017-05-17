import {observable, action, computed} from 'mobx';

import Uitstap from '../models/Uitstap';
import slice from '../lib/slice';

import uitstapAPI from '../lib/api/uitstap.js';

class Store {

  @observable
  uitstap = ``

  @observable
  uitstappen = [
    {
      id: `1`,
      uitstap: `Berlijn`,
      datum: 2017,
      positive: [
        `zeer leuk`, `hostel`, `hoera`
      ],
      negative: [
        `ontbijt`, `duits?`, `boe`
      ],
      naam: `Ruuben`,
      content: `is dit wat content?`
    },
    {
      id: `2`,
      uitstap: `Berlijn`,
      datum: 2017,
      positive: [
        `zeer leuk`, `hostel`, `hoera`
      ],
      negative: [
        `ontbijt`, `duits?`, `boe`
      ],
      naam: `Ruuben`,
      content: `is dit wat content?`
    }
  ]

  max = 200

  init = () => {
    uitstapAPI.read()
      .then(d => this._add(...d.tweets));
  }

  constructor() {
    this.init();
  }

  @computed
  get chars() {
    return this.uitstap.length;
  }

  @action
  add = (...uitstappen) => {

    uitstappen.forEach(u => {

      if (u.length === 0) return;

      this.uitstappen.push(
        new Uitstap(u)
      );

    });

  }

  @action
  setUitstap = tweet => {
    this.tweet = slice(tweet, this.max);
  }

  @action
  remove = id => {
    uitstapAPI.delete(id)
      .then(() => this.remove(id));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
