# -*- coding: utf-8 -*-
import pip

my_package = [
'Django',
'mysqlclient',
'djangorestframework'
]

package_name = []
package_version = []

def main():
    installed_packages = pip.get_installed_distributions()

    for p in installed_packages:
        pn = p.__str__().split(' ')
        package_name.append(pn[0])
        package_version.append(pn[1])

    for my_p in my_package:
        check_installed(my_p)


def install(package):
    pip.main(['install',package,"--upgrade","--quiet"])


def check_installed(name):
    if name not in package_name:
        print '{0} start to install '.format(name)
        install(name)


if __name__ == '__main__':
    main()
