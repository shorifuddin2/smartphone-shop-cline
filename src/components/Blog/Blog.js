import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="6">
                    <h2>Difference between javascript and nodejs ??</h2>
                    <p>
                        JavaScript is a high-level programming language that makes our web pages and
                        web applications dynamic and interactive by giving them the ability to think
                        and act. JavaScript is a lightweight easy to learn syntax and
                        object-oriented programming language whereas Node.js is a runtime
                        environment built on google v8 engine and typically used to represent a list
                        of objects and functions that JavaScript programs can access. JavaScripts
                        first version was launched in 1995 and it was developed by Brendan Eich of
                        Netscape then called LiveScript. As discussed earlier, JavaScript is a
                        high-level programming language that has all the functionalities normally a
                        programming language has. JavaScript is an Object-oriented programming
                        language that can be used on the client-side as well as on the server-side
                        and developers not only use it for creating web pages but also it is used
                        for game development and mobile app development.
                        </p>
                    </Col>
                    <Col md="6">
                    <h2>When should you use nodejs and when should you use mongodb ??</h2>
                    <p>
                        Node.js is a Javascript-based environment that is easily understood by
                        most of the browsers. Here, the Javascript is Server-Side instead of
                        serving client-side. Node.js is definitely fast and it allows to explore a
                        dynamic range of data at real-time. It allows code sharing. Node.js acts
                        as a proxy server and allows seamless real-time data streaming. The most
                        important reason for the rising popularity of Node.js is that the
                        programmer can code the server-side as well as client-side using it.
                        Node.js is an interpreted, familiar and flexible language. MongoDB allows
                        geospatial queries and is text-search enabled. CouchDB goes another level
                        and allows document versioning. It
                    </p>
                    </Col>
                    <Col md="6">
                    <h2> Differences between sql and nosql databases.??</h2>
                    <p>
                        SQL databases represent massive communities, stable codebases, and
                        proven standards. Multitudes of examples are posted online and experts
                        are available to support those new to programming relational data. NoSQL
                        technologies are being adopted quickly, but communities remain smaller
                        and more fractured. However, many SQL languages are proprietary or
                        associated with large single-vendors, while NoSQL communities benefit
                        from open systems and concerted commitment to onboarding users. SQL is
                        available to most major platforms, from operating systems to
                        architectures and programming languages. Compatibility varies more
                        widely for NoSQL, and dependencies need to be investigated more
                        carefully. NoSQL vary far more across their attendant systems, so
                        comparison can be more useful between multiple non-relational
                        technologies vs. SQL generally. Perhaps the most recognizable SQL
                        dialect is MySQL, an open source and free RDBMS though available through
                        proprietary licenses as well Its use is widespread in web applications,
                        and it is known for compatibility, support, and good performance in the
                        average case. MySQL has also made concessions to NoSQL practitioners
                        with features like a JSON data type, the “Document Store,” and support
                        for sharding horizontal scaling. On the non-relational side, MongoDB is
                        primarily a document store containing JSON-like structures and a
                        JavaScript interface. Its known for being user-friendly less
                        administration overhead, performant for simple queries, and flexible
                        thanks to its NoSQL underpinnings. Great for hierarchical data storage,
                        it also supports familiar relational concepts from indexing, to
                        aggregation, to some measure of ACID compliance. Like MySQL, it is
                        compatible with many platforms and programming environments, despite
                        relative recency.
                    </p>
                    </Col>
                    <Col md="6">
                    <h2>What is the purpose of jwt and how does it work ??</h2>
                    <p>
          
                    SON Web Token is a standard used to create access tokens for an
                    application. It works this way: the server generates a token that
                    certifies the user identity, and sends it to the client. The client
                    will send the token back to the server for every subsequent request,
                    so the server knows the request comes from a particular identity. This
                    architecture proves to be very effective in modern Web Apps, where
                    after the user is authenticated we perform API requests either to a
                    REST or a GraphQL API. Who uses JWT? Google, for example. If you use
                    the Google APIs, you will use JWT. A JWT is cryptographically signed
                    but not encrypted, hence using HTTPS is mandatory when storing user
                    data in the JWT, so there is a guarantee we can trust it when we
                    receive it, as no middleman can intercept and modify it, or the data
                    it holds, without invalidating it. That said, JWTs are often
                    criticized for their overuse, and especially for them being used when
                    less problematic solutions can be used. You need to form your opinion
                    around the subject. Im not advocating for a technology over another,
                    just presenting all the opportunities and tools you have at your
                    disposal. What are they good for? Mainly API authentication, and
                    server-to-server authorization.
                </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;