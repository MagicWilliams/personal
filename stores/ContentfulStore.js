import { action, observable, makeAutoObservable, runInAction } from 'mobx';

class ContentfulStore {
  constructor() {
    makeAutoObservable(this)
    this.projects;
    this.links;
  }

	async getProjects() {
    let res = await fetch(`/api/get-contentful-data`).then(async (res) => {
      const response = await res.json();
      const { projects, links, fields } = response;
      const formData = new FormData();
      runInAction(() => {
        this.projects = projects;
        this.links = links;
      });
      console.log(response);
    });
  }

  __data() {
    return {
      projects: this.projects,
      links: this.links,
    };
  }
}

export default ContentfulStore;