import React from 'react';

const DescriptionCard = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="character-profile">
            <div className="character-header mb-4">
              <h1 className="text-warning">MON NOLIMA</h1>
            </div>
            
            <div className="character-body">
              <p className="character-text" style={{lineHeight: '1.6', textAlign: 'justify'}}>
                From working in secret as one of the founders of the Rebel Alliance to openly leading the New Republic as 
                the first elected Chancellor in two decades, Mon Mothma of Chandrila has built a career out of carefully 
                navigating the dangerous shadows of Coruscant politics in her efforts to restore democracy. Once a leader 
                of the Galactic Senate's Loyalist faction, as a senator Mon Mothma opposed Supreme Chancellor Palpatine's 
                policies during the final days of the Republic. After the rise of his Empire, Mothma continues to serve 
                her constituents on Coruscant while working toward her ultimate goal: building an Alliance to Restore the Republic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;