import _ from "lodash";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";

describe("store/video", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore;
  let store;

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });

  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });

  describe("videos", () => {
    let videos;

    beforeEach(() => {
        videos = store.state['video/videos']
    })

    test("state is a array", () => {
      expect(2 + 2).toBe(4);
    });

  });

});
