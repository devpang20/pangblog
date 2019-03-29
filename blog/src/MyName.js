import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요 테스트 컴포넌트 입니다. 제 이름은 <b>{this.props.name}</b>

            </div>
        );
    }
}

export default MyName;