import React from 'react';
import Button from 'components/ui/Button';

export const landing = () => (
    <div className='landing'>
        <div className='landing__title'>
            <div className='landing__headers'>
                <h1 className='landing__header-main'>Keep Your Wine Cellar Organized</h1>
                <h2 className='landing__header-secondary'>Store your wine and track</h2>
            </div>
            <div className='landing__controls'>
                <Button text='Sign Up' />
                <Button text='Log In' />
            </div>
        </div>

        <div className='landing__details'>
            <div className='landing__age-reports'>
                <span className='landing__age-reports-heading'>Aging Reports</span>
                <span className='landing__age-reports-details'>
                    Know the ideal times to drink your wine!
                </span>
            </div>
            <div className='landing__categories'>
                <span className='landing__categories-heading'>Organize and filter</span>
                <ul className='landing__categories-details'>
                    <li>- Age</li>
                    <li>- Price</li>
                    <li>- Varietal</li>
                    <li>- And many more!</li>
                </ul>
            </div>
        </div>
    </div>
);

export default landing;
