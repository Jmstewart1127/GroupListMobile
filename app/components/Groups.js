import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, List, ListItem, Text, Icon, Right } from 'native-base';
export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    }
  }

  getUsersGroups = id => {
    fetch('https://group-list-api.herokuapp.com/api/get/my/groups/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          groups: responseJson,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.getUsersGroups(1);
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <List>
                {this.state.groups.map((group, id) => {
                  return(
                    <ListItem key={id}>
                      <Text>{group.groupName}</Text>
                    </ListItem>
                  );
                })}
              </List>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}