+++
title = "Minecraft Server"
+++

When one of my friends suggested we do something nostalgic, I didn't expect that
they wanted to play [Minecraft][0]. I was even more surprised when I found a
good place to run the server was in [Oracle Cloud][1].

<!-- more -->

Of course with the Autumn weather starting early this year I think they had a
good point, so I had a go at setting one up. It was easy enough to follow along
an existing blog post on [how to deploy a Minecraft: Java Edition server to
Oracle Cloud][2], but I wanted to put my recent experience with [Terraform][3]
to good use.

The result was [a small Terraform project][4] which sets up the needed network
resources in Oracle cloud and then deploys and (mostly) provisions a Minecraft
server. I am particularly happy with the awful hack of restricting SSH access to
only the machine that ran the Terraform script.

Nice things to improve for the future would be using a proper firewall entry for
the server ports and a systemd service file to ensure that Minecraft is
automatically restarted in case of a crash.

You can find the source code on [GitHub][4].

[0]: https://www.minecraft.net/en-us/about-minecraft
[1]: https://www.oracle.com/cloud/
[2]:
  https://blogs.oracle.com/developers/post/how-to-set-up-and-run-a-really-powerful-free-minecraft-server-in-the-cloud#open-firewall-and-security-list-ports-to-allow-public-access
[3]: https://www.terraform.io/
[4]: https://github.com/chornsby/minecraft-server
