import { defineConfig } from "vite";
import glob from "glob"
import path from "path"

export default defineConfig({
  publicDir: "public",
  build:{
    outDir:"dist",
    emptyOutDir:false,
    plugins:{
      autoprefixer: { grid: "autoplace" },
    },
    rollupOptions:{
      input: Object.fromEntries(
        glob.sync("{js,css}/**/*.{js,scss}",{
          ignore: "**/_**/*.{js,scss}",
          cwd: `./src`,
        }).map((file)=>{
          const { dir,name } = path.parse(file);
          return [`${dir}/${name}`,path.resolve("src",file)];
        })
      ),
      output:{
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
        manualChunks: undefined,
      }
    }
  },
})
