const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = graphql;

const { GraphQLDateTime } = require('graphql-iso-date');

const Events = require('../models/event');
const Tickets = require('../models/ticket');

const TicketType = new GraphQLObjectType({
  name: 'Ticket',
  fields: () => ({
    id: { type: GraphQLID },
    number: { type: new GraphQLNonNull(GraphQLString) },
    encash: { type: new GraphQLNonNull(GraphQLBoolean) },
    event: {
      type: EventType,
      resolve({ eventId }, args) {
        return Events.findById(eventId);
      },
    },
  }),
});

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    date: { type: new GraphQLNonNull(GraphQLDateTime) },
    image: { type: GraphQLString },
    status: { type: new GraphQLNonNull(GraphQLString) },
    rate: { type: GraphQLInt },
    encashTickets: { type: new GraphQLNonNull(GraphQLInt) },
    visited: { type: new GraphQLNonNull(GraphQLInt) },
    tickets: {
      type: new GraphQLList(TicketType),
      resolve({ id }, args) {
        return Tickets.find({ eventId: id });
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    event: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Events.findById(id);
      },
    },

    events: {
      type: new GraphQLList(EventType),
      resolve(parent, { title }) {
        return Events.find({ title: { $regex: title, $options: 'i' } });
      },
    },

    ticket: {
      type: TicketType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Tickets.findById(id);
      },
    },

    tickets: {
      type: new GraphQLList(TicketType),
      resolve(parent, { number }) {
        return Tickets.find({ number: { $regex: number, $options: 'i' } });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEvent: {
      type: EventType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        date: { type: new GraphQLNonNull(GraphQLDateTime) },
        image: { type: GraphQLString },
        status: { type: new GraphQLNonNull(GraphQLString) },
        rate: { type: GraphQLInt },
        encashTickets: { type: new GraphQLNonNull(GraphQLInt) },
        visited: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(
        parent,
        {
          title,
          description,
          date,
          image,
          status,
          rate,
          encashTickets,
          visited,
        },
      ) {
        const event = new Events({
          title: title,
          description: description,
          date: date,
          image: image,
          status: status,
          rate: rate,
          encashTickets: encashTickets,
          visited: visited,
        });
        return event.save();
      },
    },

    addTicket: {
      type: TicketType,
      args: {
        number: { type: new GraphQLNonNull(GraphQLString) },
        encash: { type: new GraphQLNonNull(GraphQLBoolean) },
        eventId: { type: GraphQLString },
      },
      resolve(parent, { number, encash, eventId }) {
        const ticket = new Tickets({
          number: number,
          encash: encash,
          eventId: eventId,
        });
        return ticket.save();
      },
    },

    deleteEvent: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Events.findByIdAndRemove(id);
      },
    },

    deleteTicket: {
      type: TicketType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Tickets.findByIdAndRemove(id);
      },
    },

    updateEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        date: { type: new GraphQLNonNull(GraphQLDateTime) },
        image: { type: GraphQLString },
        status: { type: new GraphQLNonNull(GraphQLString) },
        rate: { type: GraphQLInt },
        encashTickets: { type: new GraphQLNonNull(GraphQLInt) },
        visited: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(
        parent,
        {
          id,
          title,
          description,
          date,
          image,
          status,
          rate,
          encashTickets,
          visited,
        },
      ) {
        return Events.findByIdAndUpdate(
          id,
          {
            $set: {
              title: title,
              description: description,
              date: date,
              image: image,
              status: status,
              rate: rate,
              encashTickets: encashTickets,
              visited: visited,
            },
          },
          { new: true },
        );
      },
    },

    updateTicket: {
      type: TicketType,
      args: {
        id: { type: GraphQLID },
        number: { type: new GraphQLNonNull(GraphQLString) },
        encash: { type: new GraphQLNonNull(GraphQLBoolean) },
        eventId: { type: GraphQLString },
      },
      resolve(parent, { id, number, encash, eventId }) {
        return Tickets.findByIdAndUpdate(
          id,
          {
            $set: {
              number: number,
              encash: encash,
              eventId: eventId,
            },
          },
          { new: true },
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
