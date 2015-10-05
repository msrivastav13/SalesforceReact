var AccountList = require('./AccountList');
var data=[];
var AccountView = React.createClass({

          getInitialState: function() {
                return {data:[]};
           },

           loadAccountsFromServer: function(){
                makeDeferredProvider();
                var wh = SObjectModel.deferredObject('acc');
                // Use the Remote Object to query for 10 warehouse records
                var whp = wh.retrieve({
                    orderby: [ { CreatedDate: "ASC" } ], 
                    limit: 100 });
                whp.then(
                   // The first function is invoked when the promise is successfully fulfilled
                function(records){
                  records.forEach(function(record) {
                                  // Build the Account data
                                  var dataitem = {
                                    "name": record.get("Name"),
                                    "description": record.get("desc"),
                                    "fax" : record.get("Fax"),
                                    "phone" : record.get("Phone"),
                                    "type" : record.get("Type"),
                                    "id"  :  record.get("Id")
                                  }
                                 data.push(dataitem);
                              }.bind(this));
                              console.log('GOT DATA HERE'+data);
                              this.setState({data: data});
                             
                }.bind(this),
                // The second function is invoked when the promise is rejected
                function(err) {
                  
                });
                console.log('INSIDE DATA1'+data);
           },

          componentDidMount: function() {
             this.loadAccountsFromServer();
             setInterval(this.loadAccountsFromServer, this.props.pollInterval);   
          },

            render: function() {
                      return (
                        <div className="myapp">
                            <div id="accountList" className="slds-p-vertical--medium">
                              <div className="slds-page-header" role="banner">
                                <div className="slds-grid">
                                  <div className="slds-col">
                                    <p className="slds-text-heading--label">Accounts</p>
                                    <h1 className="slds-text-heading--medium">My Accounts</h1>
                                  </div>
                                </div>
                              </div>
                              <AccountList data={this.state.data} />
                            </div>
                        </div>
                      );
                    }
            });
module.exports = AccountView;