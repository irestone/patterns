# Proxy

Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object. Use of the proxy can simply be forwarding to the original object, or can provide additional logic, for example caching when operations on the original object are resource intensive, or checking preconditions before operations on the original object are invoked.

[Conceptual Example](examples/conceptual.ts)

### Resources

- https://en.wikipedia.org/wiki/Proxy_pattern
- https://refactoring.guru/design-patterns/proxy
- https://www.youtube.com/watch?v=NwaabHqPHeM
