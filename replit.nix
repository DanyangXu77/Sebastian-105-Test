{ pkgs }: {
  deps = [
    pkgs.sudo
    pkgs.busybox-sandbox-sudo
    pkgs.wallabag
    pkgs.busybox-sandbox-shell
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}