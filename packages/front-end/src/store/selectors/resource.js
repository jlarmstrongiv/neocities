import createCachedSelector from 're-reselect';

const res = state => state.res.items;
const resOrder = state => state.res.resOrder;
const resourceId = (state, resourceId) => resourceId;
const resource = (state, resourceId) => state.resources.items[resourceId];

export const resourceRes = createCachedSelector(
  res,
  resOrder,
  resourceId,
  resource,
  (res, resOrder, resourceId, resource) => {
    Object.entries(res).map((rsstate) => {
      if(rsstate[1].resource.id == resourceId){
        resource["deployed"] = rsstate[1]["deployed"]        
      }
    })
    console.log("In the selector", res, "Resource: ", resource)
    return resource;
  }
)(
  (state, resourceId) => resourceId
);
