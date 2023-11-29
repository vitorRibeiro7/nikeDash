function titleSwitch(userTitle: string) {
  let title = '';

  switch (userTitle) {
    case 'ms':
      title = 'Ms';
      break;
    case 'mr':
      title = 'Mr';
      break;
    case 'miss':
      title = 'Miss';
      break;
    case 'mrs':
      title = 'Mrs';
      break;
  }

  return title;
}

export default titleSwitch;
