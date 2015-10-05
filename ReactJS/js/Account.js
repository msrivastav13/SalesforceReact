var Account =React.createClass({
            render: function() {
              return (
                <tr>
                  <td data-label="Name"><span className="slds-truncate">{this.props.name}</span></td>
                  <td data-label="Fax"><span className="slds-truncate">{this.props.fax}</span></td>
                  <td data-label="Phone"><span className="slds-truncate">{this.props.phone}</span></td>
                  <td data-label="Type"><span className="slds-truncate">{this.props.type}</span></td>
                  <td data-label="Description"><span className="slds-truncate">{this.props.description}</span></td>
              </tr>
          );
      }
});

module.exports = Account;