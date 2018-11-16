import React from 'react';
import TextLink from 'components/ui/TextLink';

const footer = () => {
    return (
        <div className="footer">
            <div className="footer__contents">
                <div className="footer__links">
                    <TextLink render={textLink => (
                        <span>Terms of use</span>
                    )} />
                    &nbsp;|&nbsp;
                    <TextLink render={textLink => (
                        <span>Disclaimer</span>
                    )} />
                    &nbsp;|&nbsp;
                    <TextLink render={textLink => (
                        <span>Privacy Policy</span>
                    )} />
                </div>
                <div className="footer__copyright">
                    Cellar Keeper  &copy;2018
                </div>
            </div>
        </div>
    )
}

export default footer;