import React from 'react';

class EmailScrapingProtection extends React.Component {

    constructor(props){
        super(props);
const { mask } = props;
        this.state = ({
            text: mask || "-@-"
        })
    }

    componentDidMount() {
        const { timeout, text } = this.props;

        setTimeout(() => {
            this.setState({
                text: text
            });
        }, timeout || 60000);
    }

        render() {
            const { text } = this.state;
            return(
                 <span>
                     {text}
                </span>
            )
        }



}

export default EmailScrapingProtection;