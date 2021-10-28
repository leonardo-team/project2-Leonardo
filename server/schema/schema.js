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
      resolve(parent, args) {
        return Events.findById(parent.eventId);
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
      resolve(parent, args) {
        return Tickets.find({ eventId: parent.id });
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
      resolve(parent, args) {
        return Events.findById(args.id);
      },
    },

    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Events.find({});
      },
    },

    ticket: {
      type: TicketType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Tickets.findById(args.id);
      },
    },

    tickets: {
      type: new GraphQLList(TicketType),
      resolve(parent, args) {
        return Tickets.find({});
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
      resolve(parent, args) {
        const event = new Events({
          title: args.title,
          description: args.description,
          date: args.date,
          image: args.image,
          status: args.status,
          rate: args.rate,
          encashTickets: args.encashTickets,
          visited: args.visited,
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
      resolve(parent, args) {
        const ticket = new Tickets({
          number: args.number,
          encash: args.encash,
          eventId: args.eventId,
        });
        return ticket.save();
      },
    },

    deleteEvent: {
      type: EventType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Events.findByIdAndRemove(args.id);
      },
    },

    deleteTicket: {
      type: TicketType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Tickets.findByIdAndRemove(args.id);
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
      resolve(parent, args) {
        return Events.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description,
              date: args.date,
              image: args.image,
              status: args.status,
              rate: args.rate,
              encashTickets: args.encashTickets,
              visited: args.visited,
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
      resolve(parent, args) {
        return Tickets.findByIdAndUpdate(
          args.id,
          {
            $set: {
              number: args.number,
              encash: args.encash,
              eventId: args.eventId,
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
