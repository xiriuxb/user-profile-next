const IntersectionObserverMock = jest.fn().mockImplementation(() => ({
    observe: () => {},
    unobserve: () => {},
    disconnect: () => {},
  }));
  
  window.IntersectionObserver = IntersectionObserverMock;