# Set execution policy for this process
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Install type definitions
Write-Host "Installing type definitions..."
npm install --save-dev @types/react @types/react-dom @types/node

Write-Host "Setup complete! You can now run 'npm start' to start the development server." 