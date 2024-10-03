# Suggested code may be subject to a license. Learn more: ~LicenseLog:623322213.
# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.openssh
    pkgs.deno
    pkgs.terraform
    pkgs.awscli2
    pkgs.ssm-session-manager-plugin
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
    # pkgs.nodejs_20
    # pkgs.nodePackages.nodemon
  ];

  services.docker.enable = true;

  # Sets environment variables in the workspace
  env = {
    NPM_CONFIG_PREFIX = "";
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-rename-tag"
      "mads-hartmann.bash-ide-vscode"
      "alefragnani.bookmarks"
      "formulahendry.code-runner"
      "streetsidesoftware.code-spell-checker"
      "slysherz.comment-box"
      "mikestead.dotenv"
      "janisdd.vscode-edit-csv"
      "usernamehw.errorlens"
      "dsznajder.es7-react-js-snippets"
      "dbaeumer.vscode-eslint"
      "donjayamanne.githistory"
      "eamodio.gitlens"
      "ecmel.vscode-html-css"
      "wix.vscode-import-cost"
      "oderwat.indent-rainbow"
      "xabikos.javascriptsnippets"
      "yzhang.markdown-all-in-one"
      "ryuta46.multi-command"
      "nrwl.angular-console"
      "csstools.postcss"
      "esbenp.prettier-vscode"
      "yoavbls.pretty-ts-errors"
      "prisma.prisma"
      "alefragnani.project-manager"
      "mechatroner.rainbow-csv"
      "humao.rest-client"
      "foxundermoon.shell-format"
      "timonwong.shellcheck"
      "mtxr.sqltools"
      "bradlc.vscode-tailwindcss"
      "vscode-icons-team.vscode-icons"
      "styled-components.vscode-styled-components"
      "vue.volar"
      
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        # web = {
        #   # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        #   command = ["npm" "run" "dev"];
        #   manager = "web";
        #   env = {
        #     # Environment variables to set for your server
        #     PORT = "$PORT";
        #   };
        # };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = "npm install";
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}
