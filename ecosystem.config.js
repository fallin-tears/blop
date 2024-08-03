module.exports = {
      apps: [
        {
          name: 'pretend.bot',
          script: 'yarn',
          args: 'run start',
          interpreter: 'none', // This tells PM2 not to use Node.js to run the script
        }
      ],
    };
