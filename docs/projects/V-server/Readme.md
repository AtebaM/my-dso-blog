# V-Server Setup Documentation

**Server IP Address:** `178.105.238.239`
**Loom Video Link:** `[Insert link to your 5-min Loom video here]`

## Table of Contents
1. [SSH Configuration & Security](#1-ssh-configuration--security)
2. [Web Server (NGINX) Setup](#2-web-server-nginx-setup)
3. [Git & GitHub Configuration](#3-git--github-configuration)
4. [Testing & Validation](#4-testing--validation)

---

## 1. SSH Configuration & Security

To ensure secure access to the V-Server, SSH key-based authentication was configured, and password authentication was disabled.

* **Key Generation:** An SSH key pair was generated on the local machine using `ssh-keygen -t ed25519` command.
* **Key Transfer:** The public key was transferred to the server using the `ssh-copy-id` command to populate the `~/.ssh/authorized_keys` file.
* **Disabling Password Login:** After successfully verifying the SSH key login, the `/etc/ssh/sshd_config` file was edited. The `PasswordAuthentication` directive was set to `no`. The SSH daemon was then restarted.

## 2. Web Server (NGINX) Setup

NGINX was chosen as the web server for this project.

* **Installation:** Installed NGINX using the standard package manager (`apt`).
* **Configuration:** Created a custom `index.html` file located at `/var/www/html/index.html` to serve as the new entry point, replacing the default NGINX welcome page.
* **Validation:** Ran `nginx -t` to ensure the configuration was valid before restarting the NGINX service with `systemctl restart nginx`.

## 3. Git & GitHub Configuration

To allow the server to interact with GitHub repositories securely:

* **User Config:** Set the global Git configuration for `user.name` and `user.email` to match my GitHub profile.
* **Server SSH Key:** Generated a new SSH key pair directly on the V-Server. 
* **GitHub Integration:** Added the generated public key to my GitHub account's SSH settings, enabling secure `git pull` and push operations from the server without exposing personal credentials.

## 4. Testing & Validation

The following tests were conducted to ensure the setup meets all requirements:
* [x] Successfully logged into the server using the local SSH private key.
* [x] Confirmed that login using a username and password is no longer possible (Tested using `ssh -o PubKeyAuthentication=no user@ip`).
* [x] Verified the web server is accessible via the browser using the server's IP address, displaying the custom HTML page.
* [x] Verified no sensitive data (passwords, private keys) are included in this repository.