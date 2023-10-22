import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const cards = [
      { id: 1, title: 'Card 1', content: 'Sample content for Card 1' },
      { id: 2, title: 'Card 2', content: 'Sample content for Card 2' },
      { id: 3, title: 'Card 3', content: 'Sample content for Card 3' },
      { id: 4, title: 'Card 4', content: 'Sample content for Card 4' },
      { id: 5, title: 'Card 5', content: 'Sample content for Card 5' },
      { id: 6, title: 'Card 6', content: 'Sample content for Card 6' },
    ];

    return (
      <div className="container">
        <h1>Home Page</h1>
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
