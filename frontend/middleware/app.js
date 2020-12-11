export default function({store}){
  if(!store.getters['projects/isInit']){
    store.dispatch('projects/init');
  }
}
