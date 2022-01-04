import ContentfulStore from './ContentfulStore';

class RootStore {
  constructor() {
    this.contentfulStore = new ContentfulStore(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
