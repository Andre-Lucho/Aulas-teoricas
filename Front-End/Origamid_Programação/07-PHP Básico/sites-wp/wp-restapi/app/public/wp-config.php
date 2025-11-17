<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
*
* Change these to different unique phrases! You can generate these using
* the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
*
* You can change these at any point in time to invalidate all existing cookies.
* This will force all users to have to log in again.
*
* @since 2.6.0
*/
define( 'AUTH_KEY',          'h`A5$7o+>la<+ivJU.PCukHCti#?rmmpX^O[tf~4bPTsW!a$ id^I<Ve!<Ib,ZuK' );
define( 'SECURE_AUTH_KEY',   '$Sa8F5g1{SNoGMSh8 HW>f(<{=`];,r9Y7?yb*#q<4 /+Qc0<]/bKD*3:a}2qqo.' );
define( 'LOGGED_IN_KEY',     '](3vmffQrMVx07FJ{r5U#u/)]dTa,a.ZwV30Y>kQiV~S&(:RB$V@<U!fNO1?HnL^' );
define( 'NONCE_KEY',         '7+(I0<(Nx&gahVfgU;T2O>fGWEKeU}(|x?dL`CBpeBN&iOfJEJpIBH(uuu$K/vb:' );
define( 'AUTH_SALT',         '1VRsO.[;GF([#%YAk,Pfqb%%@6%-u}<x~a;gR#XW+aqvG2=ajpDgDg _BZl<}!Gf' );
define( 'SECURE_AUTH_SALT',  '=|b5B`zE RcSXIi]US}3H+N3|o1b#x|r%in-bl6%BD_MR?eTn1b:7m!fGeh?r]@Z' );
define( 'LOGGED_IN_SALT',    'CYxj~w13);]x:CO*^s=*w%~U9L^hwCl-:,20cb:xhgx{tc:,6p[TCD4[U=JYvyc)' );
define( 'NONCE_SALT',        'D&9L@4*zuGvljIrNYdw>E,F?E3bgL2%0ZfSVx:4]>EajZ*<x<R7DXVl?x|wV,mAC' );
define( 'WP_CACHE_KEY_SALT', 'nJ*+H2c=f?!5i5G!7/c_NIG[6c5ZY3I|_51/}.g_xS6MdutPP^SjepOFtEG}3^_R' );
define('JWT_AUTH_SECRET_KEY', '_D-9]FtbMee6EU]m2s8{+:(mi!,A[;sX{ _!s-|MhG%2Ur6Wy_)<[5rF]Mm2((F-' );
define('JWT_AUTH_CORS_ENABLE', true);


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
