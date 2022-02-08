export const View = date =>
  section({ class: 'location' }, [
    p({ class: 'date' }, `${date}`),
    // p({ class: 'time' }, '22:00'),
    //p({ class: 'street' }, 'Yppenplatz 5'),
    //p({ class: 'district' }, '1160 Wien'),
  ])
