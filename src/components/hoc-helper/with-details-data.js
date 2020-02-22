import React, { Component } from 'react';


const withDetailsData = (View, getData, getImgUrl) => {
    return class extends Component {
      state = {
        item: null,
        img: null,
        loading: false
      };
  
      componentDidMount() {
        this.updateItem();
      }
  
      componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
          this.updateItem();
        }
      }
  
      updateItem() {
        this.setState({
          loading: true
        });
        const { id } = this.props;
        if (!id) return;
  
        getData(id).then(item => {
          this.setState({
            item,
            loading: false,
            img: getImgUrl(id)
          });
        });
      }
  
      render() {
        return ( 
          <View {...this.state} { ...this.props } />
        )
      }
    };
  };

  export default withDetailsData;