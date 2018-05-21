const Sequelize = require('sequelize')
const sequelize = new Sequelize('odyssey', null, null, {
  dialect: 'sqlite',
  storage: './database.sqlite'
})

/**
 * Entity definition of users
 */
const User = sequelize.define('user', {
  username: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  nickname: {
    allowNull: true,
    type: Sequelize.STRING
  },
  passhash: {
    allowNull: false,
    type: Sequelize.STRING
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING
  },
  type: {
    allowNull: false,
    defaultValue: 'normal',
    type: Sequelize.ENUM('super', 'normal')
  }
})

/**
 * Entity definition of categories
 */
const Category = sequelize.define('category', {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    primaryKey: true
  },
  description: {
    allowNull: true,
    type: Sequelize.STRING
  }
})

/**
 * Entity definition of article series
 */
const Series = sequelize.define('series', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  finished: {
    type: Sequelize.BOOLEAN
  }
})

/**
 * Entity definition of posts
 */
const Post = sequelize.define('post', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  title: Sequelize.STRING,
  source: Sequelize.STRING,
  html: Sequelize.STRING,
  owner: {
    allowNull: false,
    type: Sequelize.STRING,
    references: {
      model: User,
      key: 'username'
    }
  },
  category: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: Category,
      key: 'name'
    }
  },
  series: {
    allowNull: true,
    type: Sequelize.UUID,
    references: {
      model: Series,
      key: 'id'
    }
  }
})

/**
 * Relationship of tag and post
 */
const Tag = sequelize.define('tag', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  post: {
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: Post,
      key: 'id'
    }
  }
})

module.exports = {
  db: sequelize,
  User, Category, Series, Post, Tag
}
