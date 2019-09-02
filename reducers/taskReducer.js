
const INITIAL_STATE = {
   task:[{
       title:"title",description:"description",priority:'High',id:"3678"
   }],
};
export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
       default:
           return state;
   }};