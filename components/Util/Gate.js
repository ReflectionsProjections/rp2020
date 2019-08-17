const Gate = ({ children, gatename, gates, query }) => {
  if (query[gatename] === 'true') {
    return children;
  }

  const gate = gates[gatename];
  if (gate === undefined) {
    return null;
  }
  switch (gate.type) {
    case 'TOGGLE': {
      //  TODO
      if (gate.status === 'UNLOCKED') {
        return children;
      }
      break;
    }
    case 'TIMED_UNLOCK': {
      //  TODO
      return null;
    }
    case 'TIMED_LOCK': {
      // TODO
      return null;
    }
    default: {
      return null;
    }
  }
  return null;
};

export default Gate;
