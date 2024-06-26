<?php

declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\LanguagePack\Core\Framework\DataAbstractionLayer\Write\Validation;

use Shopware\Core\System\SalesChannel\Aggregate\SalesChannelLanguage\SalesChannelLanguageDefinition;

/**
 * @internal
 */
class SalesChannelLanguageValidator extends AbstractLanguageValidator
{
    protected function getSupportedEntity(): string
    {
        return SalesChannelLanguageDefinition::ENTITY_NAME;
    }
}
