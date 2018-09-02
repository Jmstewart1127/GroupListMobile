import React, { Component } from 'react';
import { Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, List, ListItem, Text, Icon, Right } from 'native-base';
export default class SingleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    }
  }

  getListItemsByListId = () => {
    fetch('https://group-list-api.herokuapp.com/api/get/list/items/' + 5)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          listItems: responseJson,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  completeListItem = itemId => {
    fetch('https://group-list-api.herokuapp.com/api/item/complete/' + itemId, {
      method: 'PUT',
      body: {},
      headers: {
        'Content-Type': 'application/json'
      }
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          listItems: responseJson,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    })

  };

  componentDidMount() {
    this.getListItemsByListId();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <List>
                {this.state.listItems.map((item, id) => {
                  const completeItem = () => {
                    this.completeListItem(item.id)
                  };
                  return(
                    <ListItem key={id}>
                      <Button
                        onPress={completeItem}
                        title={item.name}
                        accessibilityLabel={"Tap to complete item"}
                      />
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