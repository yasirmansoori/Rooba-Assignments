const data = await User.aggregate([
  {
    $group: {
      _id: '$country',
      userCount: { $sum: 1 },
      averageAge: { $avg: '$age' }
    }
  },
  {
    $group: {
      _id: null,
      totalUsers: { $sum: '$userCount' },
      averageAge: { $avg: '$averageAge' },
      totalCountries: { $sum: 1 },
      countries: {
        $push: {
          country: '$_id',
          userCount: '$userCount'
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      totalUsers: 1,
      averageAge: 1,
      totalCountries: 1,
      countries: 1
    }
  }
]);