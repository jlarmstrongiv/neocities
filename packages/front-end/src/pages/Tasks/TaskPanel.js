import React from 'react';
import { connect, } from 'react-redux';
import * as actionTypes from 'store/actions/actionTypes';
import * as selectors from 'store/selectors';

class TaskPanel extends React.Component {
  state = {
    selectedResourceId: '',
    selectedResourceQuantity: 0,
    selectedResourceMaxQuantity: '',
    selectedTask: 1,
    selectedMovement: actionTypes.RESOURCE_DEPLOY,
    optionsMovement: [
      {
        value: actionTypes.RESOURCE_DEPLOY,
        text: 'Deploy',
      },
      {
        value: actionTypes.RESOURCE_RECALL,
        text: 'Recall',
      },
    ],
  }
  onResourceChange = event => {
    const selectedResourceId = 1 * event.target.value;
    const selectedResource = this.props.roleResources.find(roleResource => {
      return roleResource.id === this.state.selectedResource;
    });
    let quantity;
    if (selectedResource) {
      quantity = selectedResource.quantity;
      console.log(quantity);
    }
    this.setState({
      selectedResource: selectedResourceId,
      selectedResourceMaxQuantity: quantity,
    });
  }
  onResourceQuantityChange = event => {
    this.setState({ selectedResourceQuantity: event.target.value, });
  }
  onMovementChange = event => {
    this.setState({ selectedMovement: event.target.value, });
  }
  onSubmit = event => {

  }
  render() {
    return <div>
      <div>
        {this.state.optionsMovement.map((option, i) => (
          <label
            key={option.value}
            htmlFor={option.value}>
            <input
              type="radio"
              id={option.value}
              checked={option.value === this.state.selectedMovement}
              value={option.value}
              onChange={this.onMovementChange}
            />
            {option.text}
          </label>
        ))}
      </div>
      <div>
        <select
          value={this.state.selectedResource}
          onChange={this.onResourceChange}>
          {this.props.roleResources.map(roleResource => (
            <option
              value={roleResource.id}
              key={roleResource.id}>
              {roleResource.resource.name}
            </option>
          ))}
          <option value=""></option>
        </select>
      </div>
      <div>
        <label htmlFor="resourceQuantity">Quantity</label>
        <input
          type="number"
          id="resourceQuantity"
          min={0}
          max={this.state.selectedResourceMaxQuantity}
          onChange={this.onResourceQuantityChange} />
        {/* // this.props.roleResources[this.state.selectedResource].quantity */}
      </div>
      <button type="submit">{this.state.selectedMovement}</button>
    </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    roleResources: selectors.resourcesByRole(state, state.auth.userId),
    resources: state.resources.items,
    resourcesOrder: state.resources.itemsOrder,
  };
};
const mapDispatchToProps = (state, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskPanel);

// const select = (
//   <select
//     value={this.state.selectedMovement}
//     onChange={this.onMovementChange}>
//     {this.state.optionsMovement.map((option, i) => (
//       <option
//         value={option.value}
//         key={option.value}>
//         {option.text}
//       </option>
//     ))}
//   </select>
// );

// const dataList = (
//   <div>
//     <input
//       type="text"
//       list="optionsResources"
//       value={this.state.selectedResource}
//       onChange={this.onResourceChange} />
//     <datalist id="optionsResources">
//       {console.log(this.props.roleResources)}
//       {this.props.roleResources.map(roleResource => (
//         <option
//           value={roleResource.resource.name}
//           key={roleResource.id}
//         />
//       ))}
//     </datalist>
//   </div>
// );
