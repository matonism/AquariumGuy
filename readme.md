Do development in the src folder.  When development is done, transpile to components folder to remove JSX.
Ultimately, reference components folder in html

Command to transpile JSX files:
npx babel --watch public/src --out-dir public/components --presets react-app/prod 