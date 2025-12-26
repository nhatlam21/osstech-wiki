module.exports = {
  apps: [
    {
      name: "osstech-wiki",
      // Gọi trực tiếp trình Command Prompt của Windows
      script: "cmd.exe",
      // Bảo CMD chạy lệnh npm run start giúp mình
      args: "/c npm run start -- --host 0.0.0.0 --port 3000 --no-open",
      cwd: "./",
      interpreter: "none",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};