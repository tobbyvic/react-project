import React, { useState } from 'react';


// hook useState

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
      </div>
    );
}

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { showWarning: true };
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick() {
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }

function Test(props) {
    const [showWarning, setShowWarning] = useState(true);

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={() => setShowWarning(!showWarning)}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default Test;
