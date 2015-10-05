var Account = require('./Account');
var AccountList = React.createClass({
            render: function() {
                console.log('DATA'+this.props.data);
                var accountNodes = this.props.data.map(function (account) {
                  return (
                    <Account name={account.name} description={account.description} 
                             phone={account.phone} fax={account.fax} type={account.type} key={account.id}>
                    </Account>
                  );
            });
            return (
              <div className="slds-scrollable--x">
                  <table className="slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal">
                      <thead>
                          <tr className="slds-text-heading--label">
                              <th scope="col">
                                  <span className="slds-truncate">Account Name</span>
                              </th>
                              <th scope="col">
                                  <span className="slds-truncate">Fax</span>
                              </th>
                              <th scope="col">
                                  <span className="slds-truncate">Phone</span>
                              </th>
                              <th scope="col">
                                  <span className="slds-truncate">Type</span>
                              </th>
                               <th scope="col">
                                  <span className="slds-truncate">Account Description</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          {accountNodes}
                      </tbody>
                  </table>
              </div>
            );
        }
    });
module.exports = AccountList;