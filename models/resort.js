module.exports = function(sequelize, DataTypes) {
    var Resort = sequelize.define("Resort", {
        resortName: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [1, 100]

            //validate is when you want to restrict the data that can be saved for that field, is it an email, phone number, etc
            //1 = min, 100 = max
        },
        propertyOwner: {
            type: DataTypes.STRING,
        },
        geographicalRegion: {
            type: DataTypes.STRING,
            defaultValue: "United States"
            //is what gets set automatically, we can set it to be the US
            //maybe have a dropdown menu to select the geolocation to eliminate user-error
        },
        address: {
            type: DataTypes.STRING,
            // validate: {
            //     len: [10, 10],
            //     is: ["^[0-9]+$",'i'],
            // }
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,    
        },

        phoneNumber: {
             type: DataTypes.STRING,
             validate: {
                len: [1],
                    //without the comma 1 becomes the minimum
                is: ["^[0-9]+$",'i'],
            }
        },
        website: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        closestAirport: {
            type: DataTypes.STRING,
        },
        amenities: {
            type: DataTypes.TEXT,
        },
        accommodations: {
            type: DataTypes.TEXT,
        },
        description: {
            type: DataTypes.TEXT,
        },
        photo1: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        photo2: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        photo3: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        photo4: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        photo5: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        photo6: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        routeName: {
            type: DataTypes.STRING
            //slugified version of resortName
        }

    });
    return Resort;
};

