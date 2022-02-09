import { action, observable, makeAutoObservable, runInAction } from "mobx";

class ContentfulStore {
  constructor() {
    makeAutoObservable(this);
    this.projects = [];
    this.links = [];
  }

  getProjects = async () => {
    let data;
    let res = await fetch(`/api/get-contentful-data`).then(async (res) => {
      const response = await res.json();
      const { projects, links } = response;
      data = { projects, links };
    });

    runInAction(() => {
      this.projects = data.projects;
      this.links = data.links;
    });
  };

  __data() {
    return {
      projects: this.projects,
      links: this.links,
    };
  }
}

export default ContentfulStore;
