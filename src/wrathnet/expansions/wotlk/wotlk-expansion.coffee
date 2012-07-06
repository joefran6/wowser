#
# WrathNet Foundation
# Copyright (c) 2012 Tim Kurvers <http://wrathnet.org>
# 
# World of Warcraft client foundation written in JavaScript, enabling
# development of expansion-agnostic clients, bots and other useful tools.
# 
# The contents of this file are subject to the MIT License, under which 
# this library is licensed. See the LICENSE file for the full license.
#

# Wrath of the Lich King Expansion (3.x)
class WrathNet.expansions.wotlk.WotLKExpansion extends WrathNet.expansions.Expansion

  @NAME    = 'Wrath of the Lich King'
  @VERSION = '3.3.5a'
  @BUILD   = 12340

  # Sets up handlers for this expansion
  constructor: ->
    @authHandler = WrathNet.expansions.wotlk.handlers.AuthHandler
    @realmHandler = WrathNet.expansions.wotlk.handlers.RealmHandler
    @worldHandler = WrathNet.expansions.wotlk.handlers.WorldHandler