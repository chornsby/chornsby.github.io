+++
title = "Pytest Pikachu"
+++

I wanted to understand the whole process of how a Python package is distributed.
Building a pytest plugin seemed like a way to build something small but
interesting enough to publish.

<!-- more -->

You can find the source code on [GitLab][0] the package on [PyPI][1].

The most exciting thing for me is that anyone can install the plugin just by
running

```
pip install pytest-pikachu
```

which shows how convenient Python package distribution is for people who use the
packages.

After installing the plugin you can pass the `--pikachu` flag and, if all your
tests pass, you won't be the only one looking surprised.

```
$ pytest --pikachu
============================= test session starts ==============================
platform linux -- Python 3.7.1, pytest-5.1.3, py-1.8.0, pluggy-0.13.0
rootdir: /home/.../pytest-pikachu, inifile: tox.ini, testpaths: tests
plugins: pikachu-0.1.0
collected 4 items

tests/test_plugin.py ....                                                [100%]

============================== 4 passed in 0.25s ===============================

⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
```

The actual logic isn't too complicated: it relies on existing hooks within the
pytest framework which were well-documented. We wait until the end of the
session and then print out an ASCII art [Surprised Pikachu][2] if the exit code
shows the tests were successful.

The interesting bit was dipping my toes into Python packaging from the
perspective of an author. I learned about how to write a valid `setup.py` file,
complete with a pytest entrypoint, and use `twine` to upload the built
distribution to PyPI.

It was also a good opportunity to use [tox][3] and [GitLab CI][4] to run
automated tests across a variety of Python language versions. At work I have
only worked with a single version of Python at a time so this was new for me.

Overall I'm happy with how this turned out and that I learned some useful things
about Python package distribution.

[0]: https://gitlab.com/chornsby/pytest-pikachu
[1]: https://pypi.org/project/pytest-pikachu/
[2]: https://en.meming.world/wiki/Surprised_Pikachu
[3]: https://pypi.org/project/tox/
[4]: https://docs.gitlab.com/ee/ci/
