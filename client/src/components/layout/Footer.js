import React, {Component} from 'react';

class Footer extends Component {
    render () {

        return (
            <div className="Footer">
                <footer className="bg-dark text-white mt-5 p-4 text-center">
                Copyright &copy; {new Date().getFullYear()} Research Survey
                </footer>
            </div>
        );
    }
}

export default Footer;